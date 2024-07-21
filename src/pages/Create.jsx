import { Form, useActionData, useNavigate } from "react-router-dom";
import { FormInput } from "../components";
import { FormTextarea } from "../components";

//firestore
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect } from "react";

//action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let cookingTime = formData.get("cookingTime");
  let ingredients = formData.get("ingredients");
  let image = formData.get("image");
  let mathod = formData.get("mathod");

  await addDoc(collection(db, "myKitchen"), {
    title,
    cookingTime,
    ingredients,
    image,
    mathod,
  });

  return title, cookingTime, ingredients, image, mathod;
};

function Create() {
  const navigate = useNavigate();
  const actionData = useActionData();
  useEffect(() => {
    if (actionData) navigate("/");
  }, [actionData]);

  return (
    <div className="align-content text-center pt-10 w-96 ">
      <div className="font-bold text-3xl mb-5 border-8"> Create new Meal</div>
      <Form method="post">
        <FormInput name="title" label="Title" type="text" />
        <FormInput name="cookingTime" label="Cooking Time" type="text" />
        <FormInput name="ingredients" label="Ingredients" type="text" />
        <FormInput name="image" label="Image" type="url" />
        <FormTextarea name="mathod" label="Mathod" type="text" />
        <button type="submit" className="btn btn-block  btn-primary mt-10">
          Add
        </button>
      </Form>
    </div>
  );
}

export default Create;
