import React from "react";
import "./Profile.scss";
function Profile({ profile, setProfile }) {
  // Handlers 👇:
  const handleFirstNameChange = (event) =>
    setProfile({ ...profile, firstName: event.target.value });
  const handleLastNameChange = (event) =>
    setProfile({ ...profile, lastName: event.target.value });
  const handleAgeChange = (event) =>
    setProfile({ ...profile, age: event.target.value });
  const handleGroupCodeChange = (event) =>
    setProfile({ ...profile, groupCode: event.target.value });
  const handleCaseCodeChange = (event) =>
    setProfile({ ...profile, caseCode: event.target.value });
  const handleSexChange = (event) => {
    if (event.target.checked) {
      setProfile({ ...profile, sex: event.target.value });
    }
  };
  // setProfile({ ...profile, sex: event.target.value });
  // Handlers 👆

  return (
    <section className="Profile">
      <legend>اطلاعات آزموننده</legend>
      <div>
        <label htmlFor="firstName">نام</label>
        <input
          type="text"
          id="firstName"
          value={profile.firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">نام خانوادگی</label>
        <input
          type="text"
          id="lastName"
          value={profile.lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <label htmlFor="age">سن</label>
        <input
          type="text"
          id="age"
          value={profile.age}
          onChange={handleAgeChange}
        />
      </div>
      <div className="sex">
        <fieldset>
          <legend>جنسیت</legend>

          <div>
            <label htmlFor="man">مرد</label>
            <input
              type="radio"
              id="man"
              name="sex"
              value="مرد"
              onChange={handleSexChange}
            />
          </div>

          <div>
            <label htmlFor="woman">زن</label>
            <input
              type="radio"
              id="woman"
              name="sex"
              value="زن"
              onChange={handleSexChange}
            />
          </div>
        </fieldset>
      </div>
      <div>
        <label htmlFor="groupCode">کد گروه</label>
        <input
          type="text"
          id="groupCode"
          value={profile.groupCode}
          onChange={handleGroupCodeChange}
        />
      </div>
      <div>
        <label htmlFor="caseCode">کد آزموننده</label>
        <input
          type="text"
          id="caseCode"
          value={profile.caseCode}
          onChange={handleCaseCodeChange}
        />
      </div>
    </section>
  );
}

export default Profile;
