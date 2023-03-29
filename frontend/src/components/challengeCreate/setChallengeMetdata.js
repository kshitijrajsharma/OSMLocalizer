import React from "react";
import { Input, TextArea, Checkbox } from "../input";

export const MetadataForm = ({ challenge, setChallenge }) => {
  const challengeStatusOption = [
    { value: "PUBLISHED", label: "PUBLISHED" },
    { value: "ARCHIVED", label: "ARCHIVED" },
    { value: "DRAFT", label: "DRAFT" },
  ];

  const onInputChange = (e) => {
    setChallenge({
      ...challenge,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <div>
          <p className="fs-5 title text-dark fw-semibold">
            {" "}
            Step 3: Set Challenge Metadata
          </p>
        </div>
      </div>
      <div>
        <Input
          name="language_tags"
          label="Name keys to localize*"
          type="text"
          placeholder="Name keys separated by comma e.g. name, name:en"
          onChange={onInputChange}
          defaultValue={challenge.language_tags}
        />
        <Input
          label="Challenge Title*"
          name="name"
          type="text"
          placeholder="Challenge Title"
          defaultValue={challenge.name}
          onChange={onInputChange}
        />
        <TextArea
          label="Description*"
          name="description"
          type="text"
          placeholder="Description"
          defaultValue={challenge.description}
          onChange={onInputChange}
        />
        <TextArea
          label="Challenge Instructions*"
          name="feature_instructions"
          type="text"
          placeholder="Challenge Instructions"
          defaultValue={challenge.feature_instructions}
          onChange={onInputChange}
        />
        <Checkbox
          label="Status*"
          name="status"
          options={challengeStatusOption}
          onChange={onInputChange}
          value={challenge.status}
        />
      </div>
    </div>
  );
};
