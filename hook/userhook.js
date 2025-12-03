import { useUser } from "@clerk/nextjs";
import { useState,useEffect } from "react";

export const useCurrentUser = () => {
    const [currentUser,setCurrentUser] = useState({
        fullname:null,
        imageURL : null,
        email:null,
        isLoaded:false,
    });

    const {user,isLoaded} = useUser();

    useEffect(() => {
        if(isLoaded){
            if(user){
                setCurrentUser({
                    fullname:user.fullName,
                    imageURL : user.imageUrl,
                    email:user.primaryEmailAddress?.emailAddress,
                    isLoaded:true,
                })
            }else{
                setCurrentUser({
                    fullname:null,
                    imageURL : null,
                    email:null,
                    isLoaded:true,
                })
            }
        }
    },[user,isLoaded]);
    return currentUser;
}