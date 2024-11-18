
import { Alert } from 'react-native';
import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

// appwrite config
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.m.alhumed.aora',
    projectId: '6739ab42000042f8604c',
    databaseId: '6739ae2b000ab939b435',
    userCollectionId: '6739ae4b00205fc62017',
    videoCollectionId: '6739ae63002f381c8d16',
    storageId: '6739b0cf001ba9aca69b'
}

// Init your React Native SDK ( https://github.com/appwrite/sdk-for-react-native )
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email: string, password: string, username: string) => {
    try {
        // create user
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        // throw error if problem
        if (!newAccount) throw Error
        
        // generate avatar based on initials (Just like Google style avatars)
        const avatarUrl = avatars.getInitials(username)

        // Sign in the User
        await signIn(email, password)


        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                account_id: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            })
        
        return newUser;
        
    } catch (error: any) {
        console.log(error)
        Alert.alert('Error', error.message)
        throw new Error(error); 
    }

}

export const signIn = (email: string, password: string) => {
    try {
        const session = account.createEmailPasswordSession(email, password)

        return session;
    } catch (error: any) {
        console.log(error)
        Alert.alert('Error', error.message)
        throw new Error(error); 
    }
}

export const getCurrentUser = async () => {
    try {
        // Get account
        const currentAccount = await account.get()

        if (!currentAccount) throw Error

        // Get User
        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('account_id', currentAccount.$id)]
        )

        if (!currentUser) throw Error
        
        return currentUser.documents[0]
    } catch (error) {
        console.log(error);
        
    }
}