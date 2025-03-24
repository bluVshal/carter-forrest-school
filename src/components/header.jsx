import React from 'react';
import { SignedIn, SignInButton, SignedOut, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Header = () => {

    return (
        <div>
            <h1 className="text-center text-4xl font-CT mb-4 mt-2"> CARTER FORREST SCHOOL </h1>
            <SignedOut>
                <p> Please sign in to continue: </p>
            </SignedOut>
            <SignedIn>
                <SignOutButton>
                    <Button className="font-FT" variant="outline">Log Out</Button>
                </SignOutButton>
            </SignedIn>
        </div>
    )
};

export default Header;