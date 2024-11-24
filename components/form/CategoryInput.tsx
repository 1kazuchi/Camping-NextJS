import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { categories } from "@/util/categories";

const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "category";
  return (
    <div>
      <div className="mb-2">
        <Label>{name}</Label>
        <Select defaultValue={defaultValue || categories[0].label} name={name} required>
          <SelectTrigger>
            <SelectValue/>
          </SelectTrigger>
          <SelectContent>
            {categories.map((item) => {
              return (
                <SelectItem key={item.label} value={item.label}>
                  <span className="capitalize flex items-center gap-2">
                    <item.icon /> {item.label}
                  </span>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
export default CategoryInput;
