import { LocationColors } from "./definitions";

export const getStageColor = (
  stageName: string,
) => {
  return stageOptions.find((s) => s.name === stageName)
}

export const getLocationColor = (
  location: string,
) => {
  return defaultLocations.find((loc) => loc.name === location)
}

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-CA',
) => {
  if (dateStr == null){
    return ''
  }

  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export const stageOptions = [
  { name: 'To apply', color: 'bg-gray-600' },
  { name: 'Applied', color: 'bg-yellow-400' },
  { name: 'OA', color: 'bg-blue-500' },
  { name: 'Interviewing', color: 'bg-purple-500' },
  { name: 'Failed', color: 'bg-yellow-800' },
  { name: 'Offer', color: 'bg-green-500' },
  { name: 'Rejected', color: 'bg-red-600' },
];

export const defaultStageOption = stageOptions[0];

export const defaultLocations = [
  { name: "Toronto", color: "bg-pink-600" },
  { name: "Vancouver", color: "bg-blue-600" },
  { name: "California", color: "bg-yellow-600" },
  { name: "Victoria", color: "bg-red-600" },
  { name: "Remote", color: "bg-gray-600" },
  { name: "Sao Paulo", color: "bg-green-600" },
  { name: "Calgary", color: "bg-orange-600" },
  { name: "Canada", color: "bg-gray-400" },
  { name: "Ottawa", color: "bg-purple-600" },
  { name: "Seattle", color: "bg-blue-500" },
  { name: "New York", color: "bg-gray-700" },
  { name: "Waterloo", color: "bg-orange-500" },
  { name: "Kitchener", color: "bg-green-700" },
  { name: "London", color: "bg-gray-800" },
  { name: "Montreal", color: "bg-blue-400" },
  { name: "Ireland", color: "bg-purple-500" },
  { name: "Alberta", color: "bg-blue-300" },
  { name: "San Mateo", color: "bg-orange-500" },
  { name: "Saskatoon", color: "bg-blue-300" },
] as LocationColors[];

export const colorClasses = [
  "bg-pink-600", "bg-blue-600", "bg-yellow-600", "bg-red-600",
  "bg-gray-600", "bg-green-600", "bg-orange-600", "bg-gray-400",
  "bg-purple-600", "bg-blue-500", "bg-gray-700", "bg-orange-500",
  "bg-green-500", "bg-green-700", "bg-gray-800", "bg-blue-400",
  "bg-purple-500", "bg-blue-300",
];
