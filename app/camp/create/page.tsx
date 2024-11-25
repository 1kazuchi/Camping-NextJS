import FormInput from "@/components/form/formInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createLandmarkAction } from "@/action/action";
import CategoryInput from "@/components/form/CategoryInput";
import TextareaInput from "@/components/form/TextareaInput";
import ProvincesInput from "@/components/form/provincesInput";
// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

const CreateCamp = async () => {
  return (
    <section>
      <h1 className="mb-8 text-xl font-bold capitalize">new camp</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createLandmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mb-2 md:mb-0">
            <FormInput
              name="name"
              label="Landmark Name"
              type="text"
              placeholder="Landmark Name"
            />

            {/* categories */}
            <CategoryInput />
          </div>

          <div className="gap-4">
            <TextareaInput name="description" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 ">
            <FormInput
              name="price"
              label="Price"
              type="number"
              placeholder="Price"
            />
            <ProvincesInput />
          </div>

          <SubmitButton text="Create Landmark" className="mt-2" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateCamp;
