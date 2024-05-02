"use client"
import React, { useState } from 'react';
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { log } from 'console';
import { addJob } from '@/actions/addjob';
import { useToast } from '@/components/ui/use-toast';
// import { Dropdown, Checkbox } from "@nextui-org/react";
// import {Select, SelectSection, SelectItem} from "@nextui-org/react";

const branches = ["CSE", "IT", "ECE", "EEE", "Mechanical", "Civil"];
type Selection = string[];
const JobForm: React.FC = () => {
    const { toast } = useToast()
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["CSE"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys],

    );
    const handleSelectionChange = (newSelection: any) => {
        setSelectedKeys(newSelection);
        setFormData(prevState => ({
            ...prevState,
            selectedKeys: Array.from(newSelection),
        }));
    };
    console.log(selectedKeys);

    const [selectedBranches, setSelectedBranches] = useState<string[]>([]);


    const [formData, setFormData] = useState({
        companyName: '',
        jobRole: '',
        jobLocation: '',
        driveDate: '',
        numberOfRounds: 0,
        bond: 0,
        cgpa: '',
        selectedKeys: Array.from(selectedKeys),
        backlogs: 0,
        ctc: '',
        passedOutBatch: '',
        lastDateToApply: '',
        applyLink: '',
        driveMode: '',
        jobDescription: ''
    });

    const addJobWithBranches = addJob.bind(null, selectedKeys)
    

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     console.log(e.target.value);

    //     setFormData({ ...formData, [name]: value });
    // };
    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log(formData);

    // }


    return (
        <div className="p-4 w-[80%] mx-auto">
            <form action={addJobWithBranches}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div>
                        <label
                            htmlFor="companyName"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Enter Company Name
                        </label>
                        <Input
                            className='bg-white shadow-md rounded-lg text-black border-2 border-[#C4C4C4] text-lg' variant={'bordered'} type="text" placeholder="Company name" label=' ' size='lg' name='companyName'
                        />
                    </div>

                    {/* Job Role */}
                    <div>
                        <label
                            htmlFor="jobRole"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Job Role
                        </label>
                        <Input className='bg-white shadow-md rounded-lg text-black border-2 border-[#C4C4C4] text-lg' variant={'bordered'} type="text" placeholder='Job Role' label=" " size='lg' name='jobRole' />
                    </div>

                    {/* Job Location */}
                    <div>
                        <label
                            htmlFor="jobLocation"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Job Location
                        </label>
                        <Input className='bg-white shadow-md rounded-lg text-black border-2 border-[#C4C4C4] text-lg' variant={'bordered'} type="text" label=' ' placeholder="Job Location" size='lg' name='jobLocation' />
                    </div>

                    {/* Drive Date */}
                    <div>
                        <label
                            htmlFor="driveDate"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Drive Date
                        </label>
                        <Input className='bg-white shadow-md rounded-lg border-2 border-[#C4C4C4] text-[#C4C4C4] text-lg' variant={'bordered'} type="date" label="  " placeholder='0' size='lg' name='driveDate' />
                    </div>

                    {/* Number of Rounds */}
                    <div>
                        <label
                            htmlFor="numberOfRounds"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Enter Number of Rounds
                        </label>
                        <Input className='bg-white shadow-md rounded-lg text-black border-2 border-[#C4C4C4] text-lg' variant={'bordered'} type="number" label=' ' placeholder="0" size='lg' name='numberOfRounds' />
                    </div>

                    {/* Bond */}
                    <div>
                        <label
                            htmlFor="bond"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Bond
                        </label>
                        <Input className='bg-white shadow-md rounded-lg text-black border-2 border-[#C4C4C4] text-lg' variant={'bordered'} type="number" label=' ' placeholder="0" size='lg' name='bond' />
                    </div>

                    {/* CGPA */}
                    <div>
                        <label
                            htmlFor="cgpa"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            CGPA
                        </label>
                        <Input className='bg-white shadow-md rounded-lg text-black border-2 border-[#C4C4C4] text-lg' variant={'bordered'} type="text" label=' ' placeholder="0" size='lg' name='cgpa' />
                    </div>

                    {/* Backlogs */}
                    <div>
                        <label htmlFor="branches" className="block text-gray-700 font-normal mb-2">
                            Branches
                        </label>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    variant="bordered"
                                    className="w-full felx justify-start capitalize h-16 bg-white shadow-md rounded-lg text-black border-2 border-[#C4C4C4] text-lg"
                                >
                                    <p className='ml-4'>{selectedValue}</p>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                className='w-72 m-2 bg-slate-400 rounded-lg'

                                aria-label="Multiple selection example"
                                variant="bordered"
                                closeOnSelect={false}
                                disallowEmptySelection
                                selectionMode="multiple"
                                selectedKeys={selectedKeys}
                                onSelectionChange={handleSelectionChange}
                            // onChange={handleInputChange}

                            >
                                <DropdownItem key="CSE" className='border-b-2'>CSE</DropdownItem>
                                <DropdownItem key="ECE" className='border-b-2'>ECE</DropdownItem>
                                <DropdownItem key="EEE" className='border-b-2'>EEE</DropdownItem>
                                <DropdownItem key="IT" className='border-b-2'>IT</DropdownItem>
                                <DropdownItem key="AI/ML" className='border-b-2'>AI/ML</DropdownItem>
                                <DropdownItem key="MECH" className='border-b-2'>Mechanical</DropdownItem>
                                <DropdownItem key="CIVIL" className='border-b-2'>Civil</DropdownItem>

                            </DropdownMenu>
                        </Dropdown>
                    </div>

                    {/* Branches */}
                    <div>
                        <label
                            htmlFor="branches"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Backlogs
                        </label>
                        <Input className='bg-white shadow-md rounded-lg text-black border-2 border-[#C4C4C4] text-lg' variant={'bordered'} type="text" label=' ' placeholder="0" size='lg' name='backlogs' />
                    </div>
                    <div>
                        <label
                            htmlFor="backlogs"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Enter CTC
                        </label>
                        <Input className='bg-white shadow-md rounded-lg text-black border-2 border-[#C4C4C4] text-lg' variant={'bordered'} type="text" label=' ' placeholder="CTC" size='lg' name='ctc' />
                    </div>

                    {/* Batch Number */}
                    <div>
                        <label
                            htmlFor="backlogs"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Passed Out Batch
                        </label>
                        <Input className='bg-white shadow-md rounded-lg text-black border-2 border-[#C4C4C4] text-lg' variant={'bordered'} type="text" label=' ' placeholder="2024" size='lg' name='batch' />
                    </div>

                    {/* Last Date to Apply */}
                    <div>
                        <label
                            htmlFor="driveDate"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Last Date To Apply
                        </label>
                        <Input className='bg-white shadow-md rounded-lg border-2 border-[#C4C4C4] text-[#C4C4C4] text-lg' variant={'bordered'} type="date" label="  " placeholder='0' size='lg' name='lastDatetoApply' />
                    </div>

                    {/* Link */}
                    <div>
                        <label
                            htmlFor="driveDate"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Apply Link
                        </label>
                        <Input className='bg-white shadow-md rounded-lg border-2 border-[#C4C4C4] text-blue-400 text-lg' variant={'bordered'} type="Link" label="  " placeholder='Enter Link' size='lg' name='applyLink' />
                    </div>

                    {/* Drive Mode */}
                    <div>
                        <label
                            htmlFor="driveDate"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Drive Mode
                        </label>
                        <Input className='bg-white shadow-md rounded-lg border-2 border-[#C4C4C4] text-black text-lg' variant={'bordered'} type="text" label="  " placeholder='Enter Drive Mode' size='lg' name='driveMode' />
                    </div>



                    {/* Job Description */}
                    <div className="md:col-span-2">
                        <label
                            htmlFor="jobDescription"
                            className="block text-gray-700 font-normal mb-2"
                        >
                            Job Description
                        </label>
                        <Textarea
                            height={100}
                            key={''}
                            variant={'bordered'}
                            label=" "
                            labelPlacement="outside"
                            placeholder="Enter your description"
                            className="bg-white shadow-md rounded-lg text-black border-2 border-[#C4C4C4] text-lg"
                            name='jobDescription'
                        />
                    </div>
                </div>

                {/* Submit Button */}
                {/* <button
                    type="submit"
                    className="ml-72 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Job
                </button> */}
                <button type='submit' className="relative inline-flex h-12 w-full overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#103FEF_0%,#0D0140_50%,#7551FF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Add Job
                    </span>
                </button>
            </form>
        </div>
    );
};

export default JobForm;