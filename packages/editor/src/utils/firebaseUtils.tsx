import { initializeApp } from "firebase/app";
import { getAuth, sendEmailVerification, signOut } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { SavedWorkspaces, Workspace } from "../state/atoms.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_WZrM0sWpOt3oKmPp_D77rS7TsqaTC-w",
  authDomain: "penrose-test.firebaseapp.com",
  projectId: "penrose-test",
  storageBucket: "penrose-test.appspot.com",
  messagingSenderId: "997650567502",
  appId: "1:997650567502:web:f46626596ca78b065d8e1f",
  measurementId: "G-GMD2T1MJ24",
};

const firebaseApp = initializeApp(firebaseConfig);
export const authObject = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export const signOutWrapper = () => {
  signOut(authObject)
    .then(() => {
      toast.success("logged out");
    })
    .catch((error) => {
      toast.error(error.message);
    });
};

export function createWorkspaceObject(
  name: string,
  lastModified: string,
  id: string,
  editorVersion: number,
  saved: boolean,
  substance: string,
  style: string,
  domain: string,
): Workspace {
  return {
    metadata: {
      name: name,
      lastModified: lastModified,
      id: id,
      editorVersion: editorVersion,
      forkedFromGist: null,
      location: { kind: "stored", saved: saved },
    },
    files: {
      substance: {
        name: ".substance",
        contents: substance,
      },
      style: {
        name: ".style",
        contents: style,
      },
      domain: {
        name: ".domain",
        contents: domain,
      },
    },
  };
}

// untested no idea if this is valid
export async function createSavedWorkspaceObject(userid: string) {
  var loadedWorkspaces = {} as SavedWorkspaces;
  const querySnapshot = await getDocs(collection(db, userid));
  console.log("called getDocs");

  querySnapshot.forEach((doc) => {
    var docData = doc.data();
    loadedWorkspaces[doc.id] = createWorkspaceObject(
      docData.name,
      docData.lastModified,
      docData.diagramId,
      docData.editorVersion,
      true,
      docData.substance,
      docData.style,
      docData.domain,
    );
  });

  return loadedWorkspaces;
}

export async function getDiagram(diagramId: string) {
  console.log("read getDiagram");
  if (authObject.currentUser != null) {
    const fetchedDoc = await getDoc(
      doc(db, authObject.currentUser.uid, diagramId),
    );
    if (fetchedDoc.exists()) {
      const docData = fetchedDoc.data();
      return createWorkspaceObject(
        docData.name,
        docData.lastModified,
        docData.diagramId,
        docData.editorVersion,
        true,
        docData.substance,
        docData.style,
        docData.domain,
      );
    } else {
      toast.error("Could not fetch diagram");
    }
  } else {
    toast.error("User not logged in");
  }
  return null;
}

// We use authObject.currentUser here as currentAppUser is viewed as
// json and not a firebase object (????)
export const resendVerificationEmail = () => {
  if (authObject.currentUser != null) {
    // console.log(currentUser);
    sendEmailVerification(authObject.currentUser).catch((error) => {
      toast.error("Could not resend verification email");
    });
  } else {
    toast.error("Please re-login!");
  }
};

// Add to local state

// export async function saveNewDiagram(
//   userid: string,
//   currentWorkspaceState: Workspace,
// ) {
//   console.log("hit ");
//   await addDoc(collection(db, "cities"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA",
//   })
//     .catch((error) => console.log(error))
//     .then(() => console.log("yeah"));
//   console.log("end");
// }