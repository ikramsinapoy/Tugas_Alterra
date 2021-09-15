import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormCoding from "./FormCoding";

describe("FormPage", () => {
  test("renders Form component", () => {
    render(<FormCoding />);
    expect(
      screen.getByText("Pendaftaran Peserta Coding Bootcamp")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
  });

  test("cek input benar", () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "ikramsinapoy" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "ikramsinapoy@gmail.com" },
    });
    // fireEvent.input(screen.getByRole("textbox", { name: /noHandphone/i }), {
    //   target: { value: "081912345678" },
    // });
    expect(screen.getByLabelText(/Nama/)).toHaveValue("ikramsinapoy");
    expect(screen.getByLabelText(/Email/)).toHaveValue(
      "ikramsinapoy@gmail.com"
    );
    // expect(screen.getByLabelText(/No Handphone/)).toHaveValue("081912345678");
  });

  test("cek salah input", () => {
    render(<FormCoding />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "1kram" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "ikramsinapoy" },
    });
    // fireEvent.input(screen.getByRole("textbox", { name: /noHandphone/i }), {
    //   target: { value: "1234" },
    // });

    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
    // expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();

    expect(screen.getByLabelText(/Nama/)).toHaveValue("1kram");
    expect(screen.getByLabelText(/Email/)).toHaveValue("ikramsinapoy");

    // expect(screen.getByLabelText(/No Handphone/)).toHaveValue(
    //   "1234"
    // );
  });

  // test('tombol submit', () => {
  //   render(<FormCoding />);
  //   fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
  //     target: { value: 'Ikramsinapoy' },
  //   });
  //   fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
  //     target: { value: 'ikramsinapoy@gmail.com' },
  //   });
  //   fireEvent.input(screen.getByRole("textbox", { name: /No handphone/i }), {
  //     target: { value: '05298984747' },
  //   });
  //   fireEvent.submit(screen.getByText("Submit"))
  //   expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue('');
  //   expect(screen.getByLabelText(/Email/)).toHaveValue('');
  //   expect(screen.getByLabelText(/No Handphone/)).toHaveValue('');
  // });
});
