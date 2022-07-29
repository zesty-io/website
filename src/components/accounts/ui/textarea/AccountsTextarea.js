import { TextareaAutosize } from '@mui/material';

export const AccountsTextArea = ({ handleAdd }) => {
  const handleChange = (event) => {
    handleAdd(event.target.value);
  };

  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Minimum 3 rows"
      style={{ width: 200 }}
      onChange={handleChange}
    />
  );
};
