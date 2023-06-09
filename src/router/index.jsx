import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layouts/LayoutPublic";
import { loaderBlog } from "../pages/Blog";
import Post, { loaderPosts } from "../pages/Post";
import Chino from "../pages/Chino";
{
  /*este es el router que importo */
}

{
  /*errorElement le linkeo la pagina de NotFound*/
}
{
  /*Dentro de element: llamo siempre al layout publico para que lo que varie sea
el contenido de las paginas blog, about y home

el index: true, es para indicar que "/" es la ruta que corresponde a HOME*/
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/blog",
        element: <Blog />,
        loader: loaderBlog,
      },

      {
        path: "/blog/:id",
        element: <Post/>,
        loader: loaderPosts,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/chino",
        element: <Chino />,
      },

    ],
  },
]);
