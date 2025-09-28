import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import type { Student } from './types';

interface Props {
  student: Student;
  onEdit: (s: Student) => void;
  onDelete: (id: string) => void;
}

const StudentItem: React.FC<Props> = ({ student, onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);

  const handleDeleteClick = () => setOpen(true);
  const handleCancel = () => setOpen(false);
  const handleConfirmDelete = () => {
    onDelete(student.id);
    setOpen(false);
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold">{student.name}</span>
          <span className="ml-2 text-gray-500">({student.grade})</span>
        </div>
        <div>
          <IconButton color="primary" onClick={() => onEdit(student)}>
            <Edit />
          </IconButton>
          <IconButton color="error" onClick={handleDeleteClick}>
            <Delete />
          </IconButton>
        </div>
      </div>
      <div>Tuổi: {student.age}</div>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>Bạn có chắc muốn xóa sinh viên này?</DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentItem;