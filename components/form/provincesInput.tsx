// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { provinces } from "@/util/provinces";

// const ProvincesInput = ({ defaultValue }: { defaultValue?: string }) => {
//   const name = "province";
//   return (
//     <div>
//       <div className="mb-2">
//         <Label>{name}</Label>
//         <Select
//           defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
//           name={name}
//           required
//         >
//           <SelectTrigger>
//             <SelectValue />
//           </SelectTrigger>
//           <SelectContent>
//             {provinces.map((item) => {
//               return (
//                 <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
//                   <span className="capitalize flex items-center gap-2">
//                     {item.PROVINCE_NAME}
//                   </span>
//                 </SelectItem>
//               );
//             })}
//           </SelectContent>
//         </Select>
//       </div>
//     </div>
//   );
// };
// export default ProvincesInput;

// -----------------------v2-----------------------------
// "use client";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { regions } from "@/util/provinces";
// import { useState } from "react";

// // ProvincesInput Component (Ensure correct value is passed)
// const ProvincesInput = () => {
//   const name = "province";
//   const [selectedProvinceId, setSelectedProvinceId] = useState<string>("");

//   const handleValueChange = (value: string) => {
//     setSelectedProvinceId(value);
//   };

//   return (
//     <div>
//       <div className="mb-2">
//         <Label>{name}</Label>
//         <Select
//           value={selectedProvinceId}
//           onValueChange={handleValueChange}
//           name={name}
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="เลือกจังหวัด" />
//           </SelectTrigger>
//           <SelectContent>
//             {Object.entries(regions).map(([regionName, provinces]) => (
//               <SelectGroup key={regionName}>
//                 <SelectLabel>{regionName}</SelectLabel>
//                 {provinces.map((province) => (
//                   <SelectItem key={province.PROVINCE_ID} value={province.PROVINCE_ID.toString()}>
//                     <p className="pl-4">{province.PROVINCE_NAME}</p>
//                   </SelectItem>
//                 ))}
//               </SelectGroup>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>
//     </div>
//   );
// };

// export default ProvincesInput;

"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { regions } from "@/util/provinces";
import { useState } from "react";

const ProvincesInput = () => {
  const name = "province";
  const defaultProvinceName = "บุรีรัมย์"; // Default to "บุรีรัมย์"
  

  const [selectedProvinceName, setSelectedProvinceName] = useState<string>(defaultProvinceName);

  const handleValueChange = (value: string) => {

    const province = Object.values(regions)
      .flat()
      .find((province) => province.PROVINCE_NAME === value);
    
    if (province) {
      setSelectedProvinceName(province.PROVINCE_NAME); // Set the province name
    }
  };

  return (
    <div>
      <div className="mb-2">
        <Label>{name}</Label>
        <Select
          value={selectedProvinceName}
          onValueChange={handleValueChange}
          name={name}
          defaultValue={selectedProvinceName ? selectedProvinceName :  defaultProvinceName}
        >
          <SelectTrigger>
            <SelectValue>{selectedProvinceName}</SelectValue> {/* Display the selected province name */}
          </SelectTrigger>
          <SelectContent>
            {Object.entries(regions).map(([regionName, provinces]) => (
              <SelectGroup key={regionName}>
                <SelectLabel>{regionName}</SelectLabel>
                {provinces.map((province) => (
                  <SelectItem key={province.PROVINCE_ID} value={province.PROVINCE_NAME}>
                    <p className="pl-4">{province.PROVINCE_NAME}</p>
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProvincesInput;


