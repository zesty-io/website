import { TextareaAutosize } from '@mui/material';

export const AccountsTextArea = ({ name, value, handleAdd }) => {
  const handleChange = (event) => {
    handleAdd(event.target.value);
  };

  return (
    <TextareaAutosize
      defaultValue={value}
      aria-label="minimum height"
      minRows={3}
      placeholder={name}
      style={{ width: 200 }}
      onChange={handleChange}
    />
  );
};
