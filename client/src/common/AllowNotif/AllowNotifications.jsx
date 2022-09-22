import React from "react";

const AllowNotifications = () => {
  return (
    <>
      <div class="flex items-center dark:border-gray-700 mb-4">
        <input
          id="bordered-checkbox-1"
          type="checkbox"
          value=""
          name="bordered-checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="bordered-checkbox-1"
          class="py-4 ml-2 w-full text-sm font-medium text-white dark:text-gray-300"
        >
          Do you want to allow notifications?
        </label>
      </div>
    </>
  );
};

export default AllowNotifications;
