"use client";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        
        <div className="w-full flex justify-start items-start texat-left">
            <Card className="w-full max-w-xl p-6 border border-gray-100 bg-white shadow-sm rounded-3xl flex flex-col gap-6">
                
            
                <div className="flex flex-row items-center gap-5">
                    <Avatar className="h-20 w-20 shrink-0">
                        <Avatar.Image 
                            alt={user?.name || "User Profile"} 
                            src={user?.image}
                            referrerPolicy="no-referrer"
                        />
                        <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                    </Avatar>
                    
                    
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
                        <p className="text-gray-500 text-sm mt-0.5">{user?.email}</p>
                    </div>
                </div>
                
                
                
                <div className="w-full">
                    <UpdateUserModal />
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage; 

