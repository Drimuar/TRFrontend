import { useDispatch, useSelector } from "react-redux";
import UserSignupForm from "./userSignupForm";
import styles from "./user.module.scss";
import { toggleForm, toggleFormType } from "../../store/user/userSlice";
import UserLoginForm from "./userLoginForm";

export default function UserForm() {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }: { user: any }) => user);
  const closeForm = () => dispatch(toggleForm(false))
  const toggleCurrentFormType = (type: any) => dispatch(toggleFormType(type))
  return (
    showForm ? (
      <>
        <div className={styles["overlay"]} onClick={closeForm}></div>
        {formType === 'signup' ? <UserSignupForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} /> : <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />} : <></>;
      </>
    ) : (<></>)
  )
}
