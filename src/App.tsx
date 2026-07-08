import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageLoader } from "@/components/layout/PageLoader";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Projects } from "@/pages/Projects";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Services } from "@/pages/Services";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";

function App() {
  return (
    <>
      <PageLoader />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
