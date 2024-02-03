import { useRef } from "react";
import { Outlet } from "react-router-dom";
import CreateFormModal from "../tableLayout/createFormModal/CreateFormModal";

export default function MainPageLayout() {

    
  return (
    <>
      
      <main>
        <Outlet />
      </main>
    </>
  );
}
