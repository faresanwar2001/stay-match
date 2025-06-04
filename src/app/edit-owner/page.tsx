import EditOwnerForm from "./_components/edit-owner-form";
import PersonalInfo from "./_components/personal-info";

export default function EditOwner() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {/* Edit Owner Form */}
      <EditOwnerForm/>

      {/* Personal Info */}
      <PersonalInfo/>
    </div>
  )
}
