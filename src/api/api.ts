import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite";

export interface LoginCredentials {
  email: string;
  password: string;
}

// Utility function: sleep
// Pauses execution for `ms` milliseconds
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// ---- Types ----
export interface Van {
  id: string
  name: string
  price: number
  description: string
  imageUrl: string
  // add other fields from your API if needed
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface ApiError {
  message: string
  statusText: string
  status: number
}

export interface UserData {
  id: string;
  email: string;
  password: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyC5uIkHnq-7eJm9B4LeIM9fywer6Oiwbfw",
  authDomain: "vanlife-14afe.firebaseapp.com",
  projectId: "vanlife-14afe",
  storageBucket: "vanlife-14afe.firebasestorage.app",
  messagingSenderId: "350458088805",
  appId: "1:350458088805:web:6f4483d6db56171447a58c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans(id?: string): Promise<Van[] | Van> {
  if (id) {
    const vanDoc = await getDoc(doc(vansCollectionRef, id))
    if (vanDoc.exists()) {
      return { id: vanDoc.id, ...vanDoc.data() } as Van
    } else {
      throw new Error("Van not found")
    }
  } else {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })) as Van[]

    return vans
  }
}

export async function getHostVans(hostId: string, id?: string): Promise<Van[] | Van> {
  try {
    const vansRef = collection(db, "vans")

    if (id) {
      const docSnap = await getDoc(doc(vansRef, id))
      if (!docSnap.exists()) {
        throw new Error("Van not found")
      }
      return { id: docSnap.id, ...docSnap.data() } as Van

    } else {
      const q = query(vansRef, where("hostId", "==", hostId))
      const snapshot = await getDocs(q)

      return snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })) as Van[]
    }
  } catch (err) {
    console.log("Error fetching data: ", err)
    throw err
  }
}

export async function loginUser(creds: LoginCredentials): Promise<UserData> {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", creds.email), where("password", "==", creds.password));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      throw { message: "Invalid email or password" } as ApiError;
    }

    const userDoc = snapshot.docs[0];
    return { id: userDoc.id, ...userDoc.data() } as UserData;
  } catch (err: any) {
    console.error("Login error:", err);
    throw { message: err.message || "Something went wrong" } as ApiError;
  }
}