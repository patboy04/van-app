import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDyNLMoi20395oKI8bogj_vN7gF4HHrLi4",
  authDomain: "van-app-f6cd5.firebaseapp.com",
  projectId: "van-app-f6cd5",
  storageBucket: "van-app-f6cd5.appspot.com",
  messagingSenderId: "1081628366416",
  appId: "1:1081628366416:web:062ae05afe3655f8f4e355",
  measurementId: "G-7YVT41HCPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionsRef = collection(db, "vans") //reference to vans collection in firestore

//FIREBASE FIRESTORE API CALLS
export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionsRef) //snapshot of vans in firestore
    const vans = querySnapshot.docs.map(van => ({           //return data for each van in firestore and put in an array
        ...van.data(), 
        id: van.id
    }))
    return vans
}

export async function getVanDetails(id) {
    const vanDetailsRef = doc(db, "vans", id) //reference to a specific object in firestore
    const vanSnapshot = await getDoc(vanDetailsRef)
    return {...vanSnapshot.data(), id:vanSnapshot.id}
}

export async function getHostVans() {
    const q = query(vansCollectionsRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const vans = querySnapshot.docs.map(van => ({
        ...van.data(),
        id: van.id
    }))
    return vans
}

//MIRAGE.JS API CALLS
// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
