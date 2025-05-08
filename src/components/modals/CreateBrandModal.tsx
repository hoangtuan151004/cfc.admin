"use client";

import React from "react"; // Import React
import { Brand, NewBrand } from "@/types";
import { Modal } from "antd"; // Import Ant Design Modal
// Correct the import path if BrandForm is moved
import { BrandForm } from "@/app/categories/BrandTab/BrandForm"; // Import the new form component

interface CreateBrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: NewBrand) => Promise<void> | void;
  isSuccess?: boolean; // Keep for consistency, though not used by BrandForm directly
  initialData?: Brand | null;
  isLoading?: boolean;
}

export default function CreateBrandModal({
  isOpen,
  onClose,
  onCreate,
  isSuccess, // Prop is kept but not directly used by BrandForm
  initialData,
  isLoading = false,
}: CreateBrandModalProps) {
  const modalTitle = initialData ? "Edit Brand" : "Create Brand";

  return (
    <Modal
      title={modalTitle}
      open={isOpen}
      onCancel={onClose} // Modal's cancel calls onClose
      footer={null} // Footer is rendered within BrandForm
      destroyOnClose
      maskClosable={false}
    >
      {/* Render BrandForm and pass necessary props */}
      <BrandForm
        onSubmit={onCreate} // Pass the submission handler
        initialData={initialData}
        isLoading={isLoading}
        onCancel={onClose} // Pass onClose for the form's cancel button
      />
    </Modal>
  );
}
