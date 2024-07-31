import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentForm = () => {
  const formik = useFormik({
    initialValues: {
      resident_id: "",
      amount: "",
      payment_type: "Kebersihan",
    },
    validationSchema: Yup.object({
      resident_id: Yup.string().required("ID Penghuni diperlukan"),
      amount: Yup.number().positive("Jumlah harus lebih dari nol").required("Jumlah diperlukan"),
    }),
    onSubmit: (values) => {
      // Proses data pengiriman ke backend
      console.log("Payment Data:", values);
      toast.success("Data pembayaran berhasil disimpan");
    },
  });

  return (
    <div>
      <h2>Tambah Pembayaran</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          ID Penghuni:
          <input type="text" name="resident_id" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.resident_id} />
          {formik.touched.resident_id && formik.errors.resident_id ? <div className="error">{formik.errors.resident_id}</div> : null}
        </label>
        <label>
          Jumlah:
          <input type="text" name="amount" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.amount} />
          {formik.touched.amount && formik.errors.amount ? <div className="error">{formik.errors.amount}</div> : null}
        </label>
        <label>
          Jenis Pembayaran:
          <select name="payment_type" onChange={formik.handleChange} value={formik.values.payment_type}>
            <option value="Kebersihan">Kebersihan</option>
            <option value="Satpam">Satpam</option>
          </select>
        </label>
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default PaymentForm;
