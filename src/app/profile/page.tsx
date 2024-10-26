"use client"; // Add this line at the top
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SidebarDemo } from '@/components/SidebarDemo';
import Image from "next/image";
import { Button2 } from '@/components/ui/button2';




//test
const Page: React.FC = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [profileImage, setProfileImage] = useState<string>("/assets/user_logo.png");
  const [name, setName] = useState<string>("First Name");
  const [email, setEmail] = useState<string>("Email");
  const [uploadError, setUploadError] = useState<string>("");

  // Fetch profile data from the backend
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you're storing JWT in localStorage
        if(!token){
          window.location.href = '/login';

        }
        const response = await axios.get('http://localhost:8080/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;
        setName(data.name);
        setEmail(data.email);

        // Assuming the backend returns the relative path to the profile picture
        if (data.profileImage) {
          fetch(data.profileImage, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          })
            .then(response => {
              if (response.ok) {
                return response.blob(); // Convert response to a Blob
              } else {
                throw new Error('Failed to fetch profile image');
              }
            })
            .then(blob => {
              const imageUrl = URL.createObjectURL(blob); // Create a URL from the Blob
              console.log(imageUrl);
              setProfileImage(imageUrl); // Set the profile image
            })
            .catch(error => {
              console.error('Error fetching profile image:', error);
            });
          
        }
      } catch (error) {
        console.error('Error fetching profile data', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSaveChanges = async () => {
    const token = localStorage.getItem('token'); // Assuming you store the JWT token in localStorage
    try {
      const response = await fetch('http://localhost:8080/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response;
      if (response.ok) {
        console.log('Profile updated successfully');
        window.location.reload();
        
      } else {
        console.log(data || 'Failed to update profile');
      }
    } catch (error) {
      console.log(error);
      console.log('Error updating profile');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadError("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const token = localStorage.getItem('token'); // Assuming you're storing JWT in localStorage
      const response = await axios.post('http://localhost:8080/api/user/upload-profile-picture', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      });
      setProfileImage(URL.createObjectURL(selectedFile)); // Update frontend image
      setIsOverlayOpen(false); // Close the overlay
    } catch (error) {
      console.log(error);
      setUploadError("Failed to upload image. Please try again.");
    }
  };
  
  return (  
    
    <div className="pt-6 my-12">
      <SidebarDemo>
        <div className='flex-col mx-8 md:w-full lg:mr-32 pt-4'>
          <h1 className="text-[30px] font-medium">Edit Profile</h1>

          <div className='flex-col border border-gray-300 rounded-2xl p-4'>
            <h1 className='font-medium text-[20px]'>Avatar</h1>
            <div className='flex pt-4 items-center'>
              <div className="w-[85px] h-[85px] rounded-full overflow-hidden">
                <Image src={profileImage} alt="Avatar" width={85} height={85} />
              </div>
              <div className="flex-col ml-4">
                <Button2
                  className="bg-[#1175BC] h-[32px] mb-2 text-white text-[16px] px-4 py-2 rounded-full flex items-center"
                  onClick={() => setIsOverlayOpen(true)}
                >
                  Change Image
                  <img src="/assets/double_arrow_Icon.png" alt="Arrow Right" className="w-3 h-3 ml-2" />
                </Button2>
                <p className='text-[11px] w-9/12'>
                  At least 800px * 800px recommended.
                  JPG and PNG is allowed
                </p>
              </div>
            </div>
          </div>

           {/* Personal Info form */}
           <div className='flex-col mt-6 border border-gray-300 rounded-2xl p-4 lg:pr-28 xl:pr-64 2xl:pr-72'>
            <h1 className='font-medium text-[20px]'>Personal Info</h1>
            <div>
              <div className='flex flex-col gap-1 pt-4'>
                <label className='font-medium text-[#8E8E8E] text-[12px]'>Name</label>
                <input
                  type="text"
                  className='h-12 lg:h-[48px] lg:text-[18px] rounded-xl border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-1 pt-4'>
                <label className='font-medium text-[#8E8E8E] text-[12px]'>Email</label>
                <input
                  type="text"
                  className='h-12 lg:h-[48px] lg:text-[18px] rounded-xl border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <Button2 className="bg-[#1175BC] h-[32px] mt-8 mb-2 text-white text-[16px] px-4 py-2 rounded-full flex items-center" onClick={handleSaveChanges}>
              Save Changes
              <img src="/assets/double_arrow_Icon.png" alt="Arrow Right" className="w-3 h-3 ml-2" />
            </Button2>
          </div>
        </div>
      </SidebarDemo>

      {/* Overlay for file upload */}
      {isOverlayOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl mb-4">Upload New Profile Picture</h2>
            <input type="file" onChange={handleFileSelect} />
            {uploadError && <p className="text-red-500">{uploadError}</p>}
            <div className="mt-4">
              <Button2 className="bg-[#1175BC] text-white" onClick={handleUpload}>
                Upload
              </Button2>
              <Button2 className="bg-gray-500 text-white ml-2" onClick={() => setIsOverlayOpen(false)}>
                Cancel
              </Button2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;