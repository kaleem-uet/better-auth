"use server";
import { auth } from "@/lib/auth"

export const signIn = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    await auth.api.signInEmail({
        body: {
            email: email,
            password: password,
        }
    })
    return {
        success: true,
        message: "User signed in successfully"
    }
}


export const signUp = async ({
    email,
    password,
    name,
}: {
    email: string;
    password: string;
    name: string;
}) => {
    await auth.api.signUpEmail({
        body: {
            email: email,
            password: password,
            name: name,
        }
    })
    return {
        success: true,
        message: "User created successfully"
    }
}


export const signOut = async () => {
    await auth.api.signOut({
        headers: {
            "Cookie": "better-auth.session=; better-auth.session.sig=; better-auth.refreshToken=; better-auth.refreshToken.sig="
        }
    })
}



