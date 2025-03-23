import Genders from "./Genders";

interface Users {
    user_id: number;
    first_name: string;
    middle_name?: string;
    last_name: string;
    suffix_name?: string;
    age: number;
    gender_id: Genders;
    address: string;
    contact_numbers: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
}

export default Users;