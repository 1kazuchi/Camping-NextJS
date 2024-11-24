import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { provinces } from "@/util/provinces";

const ProvincesInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "province";
  return (
    <div>
      <div className="mb-2">
        <Label>{name}</Label>
        <Select
          defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
          name={name}
          required
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {provinces.map((item) => {
              return (
                <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                  <span className="capitalize flex items-center gap-2">
                    {item.PROVINCE_NAME}
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
export default ProvincesInput;
