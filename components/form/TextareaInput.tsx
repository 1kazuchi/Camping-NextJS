import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TextareaInput = ({
  name,
  labelText,
  defaultValue,
}: {
  name: string;
  labelText?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        defaultValue={defaultValue}
        id={name}
        name={name}
        rows={5}
        required
      />
    </div>
  );
};
export default TextareaInput;
