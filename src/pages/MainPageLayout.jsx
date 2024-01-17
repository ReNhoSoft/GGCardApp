import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import CreateFormModal from "../tableLayout/createFormModal/CreateFormModal";

export default function MainPageLayout() {
    const formRef = useRef();

    function onClickAddItem(event) {
        formRef.current.showModal();
      }
  return (
    <>
      <Header onClickAdd={onClickAddItem} />
      <main>
        <Outlet />
      </main>
      <CreateFormModal ref={formRef} />
    </>
  );
}
