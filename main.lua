function read_file(filename)
    local file = io.open(filename, "r")
    local content = file:read("*all")
    file:close()
    return content
end

local txt = read_file("duck.txt")
local colors = {"\27[31m","\27[32m","\27[33m","\27[34m","\27[35m","\27[36m","\27[90m"}

function display(color)
    io.write(color..txt.."\27[0m\n")
end

function delay(n)
    os.execute("ping -n " .. tonumber(n+1) .. " localhost > NUL")
end

local i = 1
while true do
    display(colors[i])
    i = i + 1
    if i > #colors then
        i = 1
    end
    delay(0.1)
end
