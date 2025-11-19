import Layout from "../components/Layout.css";
// import { useNavigate } from "react-router-dom";
export default function Home() {
  // const navigate = useNavigate();
  return (
    <Layout>
<section className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text 
                       bg-linear-to-r from-blue-400 via-purple-400 to-pink-400
                       bg-size-[200%_200%] animate-gradient-colors text-glow
                       leading-tight">
          Welcome to Lagersystem
        </h2>
        <p className="text-gray-400 max-w-xl mb-8">
          Manage your inventory effortlessly with a modern, sleek interface. 
          Track, update, and visualize your stock in real-time.
        </p>
 
      </section>
    </Layout>
  );
}