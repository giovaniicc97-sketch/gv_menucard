local isOpen = false

exports('useSpeisekarte', function(data, slot)
    if not isOpen then
        isOpen = true
        SetNuiFocus(true, true)
        SendNUIMessage({
            action = "open"
        })
        TriggerEvent("gv_menucard:Speisekarte")
    end
end)

RegisterNUICallback('close', function(data, cb)
    SetNuiFocus(false, false)
    isOpen = false
    TriggerEvent("gv_menucard:SpeisekarteCancel")
    cb('ok')
end)

RegisterNetEvent("gv_menucard:Speisekarte", function()
    local ped = PlayerPedId()
    
    ClearPedTasks(ped)

    TaskStartScenarioInPlace(ped, "WORLD_HUMAN_CLIPBOARD", 0, true)
end)

RegisterNetEvent("gv_menucard:SpeisekarteCancel", function()
    local ped = PlayerPedId()
    ClearPedTasksImmediately(ped)
end)
