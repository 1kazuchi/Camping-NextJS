import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/formInput";

const CreateProfile = () => {
  const createProfileAction = async (formData: FormData) => {
    "use server";
    const firstName = formData.get("firstname") as string;
    const lastName = formData.get("lastname") as string;

    console.log(firstName);
    console.log(lastName);
  };

  return (
    <section>
      <h1 className="mb-8 text-xl font-bold capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        <form action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstname"
              label="First Name"
              type="text"
              placeholder="First Name"
            />
            <FormInput
              name="lastname"
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />
            <FormInput
              name="username"
              label="Username"
              type="text"
              placeholder="Username"
            />
          </div>
          <Button className="mt-2" type="submit" size="lg">
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProfile;
