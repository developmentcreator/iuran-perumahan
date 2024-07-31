import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResidentForm = () => {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      ktp_photo: null,
      status: "Tetap",
      phone_number: "",
      is_married: false,
    },
    validationSchema: Yup.object({
      full_name: Yup.string().max(255, "Nama lengkap tidak boleh lebih dari 255 karakter").required("Nama lengkap diperlukan"),
      phone_number: Yup.string()
        .matches(/^[0-9]+$/, "Nomor telepon harus berupa angka")
        .required("Nomor telepon diperlukan"),
    }),
    onSubmit: (values) => {
      // Proses data pengiriman ke backend
      console.log("Resident Data:", values);
      toast.success("Data penghuni berhasil disimpan");
    },
  });

  return (
    <div>
      <h2>Tambah/Ubah Penghuni</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Nama Lengkap:
          <input type="text" name="full_name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.full_name} />
          {formik.touched.full_name && formik.errors.full_name ? <div className="error">{formik.errors.full_name}</div> : null}
        </label>
        <label>
          Foto KTP:
          <input type="file" name="ktp_photo" onChange={(event) => formik.setFieldValue("ktp_photo", event.currentTarget.files[0])} />
        </label>
        <label>
          Status:
          <select name="status" onChange={formik.handleChange} value={formik.values.status}>
            <option value="Tetap">Tetap</option>
            <option value="Kontrak">Kontrak</option>
          </select>
        </label>
        <label>
          Nomor Telepon:
          <input type="text" name="phone_number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone_number} />
          {formik.touched.phone_number && formik.errors.phone_number ? <div className="error">{formik.errors.phone_number}</div> : null}
        </label>
        <label>
          Sudah Menikah:
          <input type="checkbox" name="is_married" checked={formik.values.is_married} onChange={formik.handleChange} />
        </label>
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default ResidentForm;
