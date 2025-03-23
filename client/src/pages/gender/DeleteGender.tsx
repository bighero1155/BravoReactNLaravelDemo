import DeleterGenderForm from "../../components/forms/DeleterGenderForm";
import MainLayout from "../layout/MainLayout";

const DeleteGender = () => {
  const content = (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-3">
          <DeleterGenderForm />
        </div>
      </div>
    </>
  );
  return <MainLayout content={content} />;
};

export default DeleteGender;
