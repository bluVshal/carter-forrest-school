import React from 'react';
import { SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Header = () => {

    return (
        <div>            
            <SignedOut>
                <SignInButton forceRedirectUrl="/">
                    <Button variant="outline">Login</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <p> Welcome to:  </p>
            </SignedIn>
        </div>
    )
};

export default Header;