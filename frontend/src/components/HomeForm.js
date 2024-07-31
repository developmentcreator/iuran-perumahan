import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: "Dihuni",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255, "Nama rumah tidak boleh lebih dari 255 karakter").required("Nama rumah diperlukan"),
    }),
    // Pada bagian onSubmit, tambahkan notifikasi:
    onSubmit: (values) => {
      // Kirim data ke backend
      console.log("Home Data:", values);
      // Tampilkan notifikasi sukses
      toast.success("Data rumah berhasil disimpan");
    },
  });

  return (
    <div>
      <h2>Tambah/Ubah Rumah</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Nama Rumah:
          <input type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </label>
        <label>
          Status:
          <select name="status" onChange={formik.handleChange} value={formik.values.status}>
            <option value="Dihuni">Dihuni</option>
            <option value="Tidak Dihuni">Tidak Dihuni</option>
          </select>
        </label>
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default HomeForm;
