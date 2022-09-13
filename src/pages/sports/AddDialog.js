import PropTypes from "prop-types";
import AppDialog from "../../components/AppDialog";
import AddFormMap from "./addFormMap";

export default function AddDialog({ open, onClose, type }) {
  const FormComponent = AddFormMap[type];

  if (!FormComponent) return null;

  return (
    <AppDialog
      fullHeight
      open={open}
      onClose={onClose}
      sxStyle={{
        height: "90vh",
      }}
    >
      <FormComponent onSubmit={() => onClose && onClose()} />
    </AppDialog>
  );
}

AddDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
