import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Mail, PhoneCall, Zap } from "lucide-react";

interface FormLinkProps {
  eventName: string;
}

const FormLink = ({ eventName }: FormLinkProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    salutation: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="md:p-8 p-4 md:max-w-2xl">
      <div className="border-t-8 border-primary p-4 shadow-md mb-8">
        <h2 className="md:text-2xl text-xl text-gray-900 font-semibold mb-2">
          {eventName}
        </h2>
        <p className="text-gray-600 text-sm mb-3 md:max-w-lg">
          Formal dinner following the wedding ceremony. Includes speeches,
          toasts, and a live band.
        </p>
        <p className="text-gray-600 text-sm mb-1">
          Contact us for more enquiry
        </p>
        <div className="flex space-x-2 justify-start items-center">
          <div className="flex items-center space-x-1 text-primary">
            <PhoneCall size={16} />
            <span className="text-primary text-sm">08023876754</span>
          </div>
          <div className="flex items-center space-x-1 text-primary">
            <Mail size={16} />
            <span className="text-primary text-sm">Gafarj544@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="">
        <div className="grid gap-4 bg-white border-l-8 border-l-primary shadow p-6 rounded-2xl border mb-6">
          <div>
            <label className="uppercase text-sm text-gray-600 mb-1">
              Salutation
            </label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, salutation: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select salutation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mr">Mr</SelectItem>
                <SelectItem value="Mrs">Mrs</SelectItem>
                <SelectItem value="Miss">Miss</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                First name
              </label>
              <Input
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="uppercase text-sm text-gray-600 mb-1">
                Last name
              </label>
              <Input
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="uppercase text-sm text-gray-600 mb-1">
              Email
            </label>
            <Input
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="uppercase text-sm text-gray-600 mb-1">
              Phone
            </label>
            <Input
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button className="bg-[#1877f2] hover:bg-[#145ecc] w-full">
          Get Link
        </Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full mt-2"
              onClick={handleOpen}
            >
              Configure
            </Button>
          </DialogTrigger>
          <DialogContent className="right-0 sm:max-w-7xl">
            <h2 className="text-xl font-bold mb-4">Properties</h2>

            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, salutation: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Salutation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mr">Mr</SelectItem>
                <SelectItem value="Mrs">Mrs</SelectItem>
                <SelectItem value="Miss">Miss</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <Input
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <div className="border-dashed border-2 rounded-xl p-2 text-center mt-2 cursor-pointer hover:border-[#1877f2]">
              <div className="flex justify-center items-center py-2">
                <Zap className="text-gray-600" />
              </div>
              <p className="text-gray-600 text-sm">
                <span className="text-gray-400">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                className="bg-[#1877f2] hover:bg-[#145ecc]"
                onClick={handleClose}
              >
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default FormLink;
