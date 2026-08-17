import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import {Button} from "../ui/Button";
import { useAuth } from "../../context/AuthContext";
import { UserButton } from "@neondatabase/neon-js/auth/react";
export default function Navbar() {
    const {user} = useAuth();
    return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b boder-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 items-center justify-between flex">
            <Link 
              to="/"
              className="flex items-center gap-2 text-[var(--color-foreground)]">
                <Dumbbell className="w-6 h-6 text-[var(--color-accent)]" />
                <span className="font-semibold text-lg">Нейропланировщик</span>
            </Link>

            <nav>
                {user ? (
                    <>
                    <Link to="/profile">
                        <Button variant="ghost" size="sm">
                            Мой план
                        </Button>
                    </Link>
                    <UserButton className="bg-(--color-accent)"/>
                </>
                ):(
                    <>
                        <Link to="/auth/sign-in">
                            <Button variant="ghost" size="sm">
                                Авторизация
                            </Button>
                        </Link>
                        <Link to="/auth/sign-up">
                            <Button size="sm">
                                Регистрация
                            </Button>
                        </Link>
                    </>
                )}
                
            </nav>
        </div>
    </header>
    );
}