import { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [years, setYears] = useState([]);
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);

  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("/users.json");
        const data = await response.json();
        setAllUsers(data);
        setFilteredUsers(data);
        populateFilters(data)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);



  const populateFilters = (users) => {
    const uniqueYears = [...new Set(users.map((u) => u.years))].sort();
    const uniqueCategory = [...new Set(users.map((u) => u.category))].sort();
    const uniqueCountries = [...new Set(users.flatMap((u) => u.countries))].sort();
    setYears(uniqueYears);
    setCountries(uniqueCountries);
    setCategories(uniqueCategory);
  }


  const applyFilters = () => {
    let filtered = [...allUsers];
    if (category) filtered = filtered.filter((c) => c.category === category);
    if (year) filtered = filtered.filter((c) => c.years === Number(year));
    if (country) filtered = filtered.filter((c) => (c.countries || []).includes(country));

    if (search.trim()) filtered = filtered.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredUsers(filtered)
  }


    const resetFilters = () => {
    setCategory("")
    setYear("")
    setCountry("")
    setSearch("")
    setFilteredUsers(allUsers)
  }


  return <UserContext.Provider value={{
    filteredUsers,
    loading,
    years, 
    setYears,
    year,
    setYear,
    country, 
    setCountry,
    countries,
    category, 
    setCategory,
    categories,
    search,
    setSearch,
    applyFilters,
    resetFilters
  }}>
    {children}
  </UserContext.Provider>
}



export const useUserContext = () => useContext(UserContext)