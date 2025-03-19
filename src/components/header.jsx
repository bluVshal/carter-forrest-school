import React from 'react';
import { SignedIn, SignInButton, SignedOut, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Header = () => {

    return (
        <div>
            <SignedOut>
                <p className="text-3xl"> Please sign in to continue: </p>
            </SignedOut>
            <SignedIn>
                <SignOutButton>
                    <Button variant="outline">Log Out</Button>
                </SignOutButton>
            </SignedIn>
        </div>
    )
};

export default Header;