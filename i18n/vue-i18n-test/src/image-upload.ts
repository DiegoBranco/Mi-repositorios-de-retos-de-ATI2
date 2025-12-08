

async function getAccessToken(username: string, password: string): Promise<string | null> {
  try {
    const response = await fetch("https://api.example.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      console.error("Authentication failed:", response.status, await response.text());
      return null;
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error during authentication:", error);
    return null;
  }
}

// 2. Function to upload the image
async function uploadImage(accessToken: string, imageFile: File): Promise<void> {
  try {
    const headers = {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/octet-stream", 
    };

    const response = await fetch("https://api.example.com/upload/image", {
      method: "POST",
      headers: headers,
      body: imageFile, // The File object can be sent directly as the body
    });

    if (response.ok) {
      console.log("Image uploaded successfully!");
    } else {
      console.error(`Error uploading image: ${response.status} - ${await response.text()}`);
    }
  } catch (error) {
    console.error("Error during image upload:", error);
  }
}

// 3. Example of how to use these functions
// In a real application, you would get the imageFile from an <input type="file"> element
async function main(imageFile: File) {
  const accessToken = await getAccessToken("user", "password");

  if (accessToken && imageFile) {
    await uploadImage(accessToken, imageFile);
  } else {
    console.error("Could not upload image. Missing access token or image file.");
  }
}

// To use this in a component:
// 1. Add an input element to your template: <input type="file" @change="handleFileUpload">
// 2. In your component's script:
/*
const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    main(file); // Call the upload logic
  }
};
*/
