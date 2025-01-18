"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import { CreateTaskFormWrapper } from "./create-task-form-wrapper";

export const CreateTaskModal = () => {
    const { isOpen, setIsOpen } = useCreateTaskModal();

    const handleClose = () => {
        setIsOpen(false); 
      };

    return (
        <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
                <CreateTaskFormWrapper onCancel={handleClose} />
        </ResponsiveModal>
    );
};