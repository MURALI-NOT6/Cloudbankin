export const borrowerForm = [
  {
    pageName: "Borrower Company Info",
    fields: [
      {
        fieldId: "1",
        fieldName: "Property Name",
        type: "string",
        width: "32",
      },
      {
        fieldId: "2",
        fieldName: "Property Type",
        type: "dropdown",
        selectableValues: ["Own House", "Rented"],
        width: "32",
      },
      {
        fieldId: "3",
        fieldName: "Number of Units",
        type: "dropdown",
        selectableValues: ["1", "2"],
        width: "32",
      },
      {
        fieldId: "4",
        fieldName: "Property Address",
        type: "textarea",
        width: "100",
      },
      {
        fieldId: "5",
        fieldName: "File Attachment",
        type: "file",
        width: "100",
      },
    ],
  },
  {
    pageName: "Director Info",
    fields: [
      {
        fieldId: "1",
        fieldName: "Director Name",
        type: "string",
        width: "32",
      },
      {
        fieldId: "2",
        fieldName: "Director InCome",
        type: "dropdown",
        selectableValues: ["10L to 20L", "20L to 30L", "30L Above"],
        width: "32",
      },
      {
        fieldId: "3",
        fieldName: "Director Contect",
        type: "string",
        width: "32",
      },
      {
        fieldId: "4",
        fieldName: "Director Address",
        type: "textarea",
        width: "100",
      },
      {
        fieldId: "5",
        fieldName: "File Attachment",
        type: "file",
        width: "100",
      },
    ],
  },
  {
    pageName: "Financial Info",
    fields: [
      {
        fieldId: "1",
        fieldName: "Financial Name",
        type: "string",
        width: "49",
      },
      {
        fieldId: "2",
        fieldName: "Financial Type",
        type: "dropdown",
        selectableValues: ["Income", "Expenses", "Assets", "Liabilities"],
        width: "49",
      },
      {
        fieldId: "3",
        fieldName: "Financial Amount",
        type: "dropdown",
        selectableValues: ["10L to 20L", "20L to 30L", "30L Above"],
        width: "49",
      },
      {
        fieldId: "4",
        fieldName: "Financial Time",
        type: "dropdown",
        selectableValues: ["1Month to 2Y", "2Y to 5Y", "5Y Above"],
        width: "49",
      },
      {
        fieldId: "5",
        fieldName: "File Attachment",
        type: "file",
        width: "100",
      },
    ],
  },
  {
    pageName: "Past Perfomance Details",
    fields: [
      {
        fieldId: "1",
        fieldName: "Credit Score",
        type: "string",
        width: "32",
      },
      {
        fieldId: "2",
        fieldName: "Previous Loans",
        type: "string",
        width: "32",
      },
      {
        fieldId: "3",
        fieldName: "Debt-to-Income Ratio",
        type: "string",
        width: "32",
      },
      {
        fieldId: "4",
        fieldName: "Times Interest Earned",
        type: "textarea",
        width: "100",
      },
      {
        fieldId: "5",
        fieldName: "File Attachment",
        type: "file",
        width: "100",
      },
    ],
  },
  {
    pageName: "Document Upload",
    fields: [
      {
        fieldId: "1",
        fieldName: "Identity Proof",
        type: "file",
        width: "100",
      },
      {
        fieldId: "2",
        fieldName: "Address Proof",
        type: "file",
        width: "100",
      },
      {
        fieldId: "3",
        fieldName: "Income Proof",
        type: "file",
        width: "100",
      },
      {
        fieldId: "4",
        fieldName: "Proof of Business",
        type: "file",
        width: "100",
      },
      {
        fieldId: "5",
        fieldName: "Collateral Proof s",
        type: "file",
        width: "100",
      },
    ],
  },
];
