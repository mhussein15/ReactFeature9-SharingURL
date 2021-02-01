// Styling
import { DeleteButtonStyled } from "../../styles";
import { useDispatch } from "react-redux";
import { deleteCookie } from "../../store/actions";

const DeleteButton = (props) => {
  const dispatch = useDispatch();

  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteCookie(props.productId))}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
