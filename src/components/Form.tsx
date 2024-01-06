import { useRef, useState } from "react";
import { FieldValues, useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import { FormEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from 'react'


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const onsubmit = (data: FieldValues) => console.log(data);

  const schema = z.object({
    name: z.string().min(3),
    age: z.number().min(18),
  });
  type FormData = z.infer<typeof schema>;
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="mp-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 4 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The Name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p>The Name must be more than 4 characters.</p>
        )}
      </div>
      <div className="mp-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true, maxLength: 2 })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">The Age field is required.</p>
        )}
        {errors.age?.type === "maxLength" && (
          <p>The Number field have to be less than 2 numbers.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          {...register("address", { required: true, minLength: 4 })}
          id="address"
          type="text"
          className="form-control"
        />
        {errors.address?.type === "required" && (
          <p className="text-danger">The Address field is required.</p>
        )}
        {errors.address?.type === "minLength" && (
          <p className="text-danger">
            The Name must be more than 4 characters.
          </p>
        )}
      </div>
      <div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <div className="mb-3">
  //       <label htmlFor="name" className="form-label">
  //         Name
  //       </label>
  //       <input {...register('name')}
  //       id="name" type="text" className="form-control" />
  //     </div>
  //     <div className="mb-3">
  //       <label htmlFor="age" className="form">
  //         Age
  //       </label>
  //       <input
  //       {...register("age")}
  //       id="age" type="number" className="form-control" />
  //     </div>
  //     <div className="mb-3">
  //       <label htmlFor="address" className="form-label">
  //         Address
  //       </label>
  //       <input id="address" type="text" className="form-control" />
  //     </div>
  //     <div>
  //       Gender <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male &nbsp;&nbsp;{" "}
  //       <input type="radio" id="male" className="name" />
  //       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Female&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  //       <input type="radio" id="male" className="name" />
  //     </div>
  //     <br />
  //     <button className="btn btn-success" type="submit">
  //       Submit
  //     </button>
  //   </form>
  // )
};

export default Form;
