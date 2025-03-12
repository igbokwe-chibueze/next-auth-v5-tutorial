/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'lh3.googleusercontent.com', // this method is not secure instead, don,t take the image directly from the google server, upload it to ur own image storage when the user signs up.
            },
        ],
    },
};

export default nextConfig;
